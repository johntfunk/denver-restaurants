(function () {
  "use strict";

  var STAR_PATH = "M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z";
  var COLUMNS = ["Restaurant", "Michelin", "Format", "Cost", "Good to know"];
  var data = window.TRACKER;
  var filter = "all";

  function byId(id) {
    return document.getElementById(id);
  }

  function showError(message) {
    var root = byId("table-root");
    if (!root) return;
    var p = document.createElement("p");
    p.className = "notice";
    p.textContent = message;
    root.appendChild(p);
  }

  if (!data || !Array.isArray(data.restaurants)) {
    showError("The restaurant list could not be loaded from data/restaurants.js.");
    return;
  }

  function isStarred(place) {
    return place.stars > 0;
  }

  function isTasting(place) {
    return place.format === "Tasting menu";
  }

  function countWhere(predicate) {
    var count = 0;
    data.restaurants.forEach(function (place) {
      if (predicate(place)) count += 1;
    });
    return count;
  }

  function isVisible(place) {
    if (filter === "stars") return isStarred(place);
    if (filter === "tasting") return isTasting(place);
    return true;
  }

  function chefIds() {
    var ids = {};
    (data.chefs || []).forEach(function (chef) {
      if (chef.id && /^[A-Za-z0-9_-]+$/.test(chef.id)) ids[chef.id] = true;
    });
    return ids;
  }

  function safeHttpUrl(url) {
    try {
      var parsed = new URL(url, window.location.href);
      if (parsed.protocol === "https:" || parsed.protocol === "http:") return parsed.href;
    } catch (err) {
      return "";
    }
    return "";
  }

  function applyIntro() {
    var summary = byId("summary");
    if (summary && data.summary) summary.textContent = data.summary;
    var time = byId("updated");
    if (time && data.updated) {
      time.textContent = data.updated;
      if (data.updatedISO) time.setAttribute("datetime", data.updatedISO);
    }
    if (data.title) document.title = data.title;
  }

  function renderMetrics() {
    var root = byId("metrics");
    if (!root) return;
    var starred = countWhere(isStarred);
    var tasting = countWhere(isTasting);
    var details = data.metrics || {};
    var items = [
      { value: String(data.restaurants.length), label: "Restaurants tracked" },
      {
        value: String(starred),
        label: "Michelin one-star",
        detail: details.starredDetail || "2026 guide"
      },
      {
        value: String(tasting),
        label: "Fixed-price tasting menus",
        detail: details.tastingDetail || "$175 to $250 per person"
      }
    ];

    root.textContent = "";
    var list = document.createElement("div");
    list.className = "metrics";
    items.forEach(function (item) {
      var card = document.createElement("article");
      card.className = "metric";
      var value = document.createElement("p");
      value.className = "metric-value";
      value.textContent = item.value;
      var label = document.createElement("h3");
      label.className = "metric-label";
      label.textContent = item.label;
      card.appendChild(value);
      card.appendChild(label);
      if (item.detail) {
        var detail = document.createElement("p");
        detail.className = "metric-detail";
        detail.textContent = item.detail;
        card.appendChild(detail);
      }
      list.appendChild(card);
    });
    root.appendChild(list);
  }

  function renderFilters() {
    var root = byId("filters");
    if (!root) return;
    var options = [
      { id: "all", label: "All", count: data.restaurants.length },
      { id: "stars", label: "Michelin stars", count: countWhere(isStarred) },
      { id: "tasting", label: "Tasting menus", count: countWhere(isTasting) }
    ];

    root.textContent = "";
    options.forEach(function (option) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "filter-btn";
      button.dataset.filter = option.id;
      button.setAttribute("aria-pressed", option.id === filter ? "true" : "false");
      button.appendChild(document.createTextNode(option.label));
      var count = document.createElement("span");
      count.className = "filter-count";
      count.textContent = String(option.count);
      button.appendChild(count);
      button.addEventListener("click", function () {
        filter = option.id;
        var buttons = root.querySelectorAll(".filter-btn");
        Array.prototype.forEach.call(buttons, function (el) {
          el.setAttribute("aria-pressed", el.dataset.filter === filter ? "true" : "false");
        });
        renderTable();
      });
      root.appendChild(button);
    });
  }

  function starBadge(count) {
    if (!count) {
      var none = document.createElement("span");
      none.className = "unguided";
      none.textContent = "Not in guide";
      return none;
    }

    var wrap = document.createElement("span");
    wrap.className = "star-badge";
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-label", "Michelin star");
    svg.setAttribute("role", "img");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#C8102E");
    path.setAttribute("d", STAR_PATH);
    svg.appendChild(path);
    var label = document.createElement("span");
    label.textContent = count + " star";
    wrap.appendChild(svg);
    wrap.appendChild(label);
    return wrap;
  }

  function renderTable() {
    var root = byId("table-root");
    if (!root) return;
    var knownChefs = chefIds();
    var rows = data.restaurants.filter(isVisible);
    var status = byId("filter-status");
    if (status) {
      status.textContent = "Showing " + rows.length + " of " + data.restaurants.length + " restaurants.";
    }

    root.textContent = "";
    if (!rows.length) {
      var empty = document.createElement("p");
      empty.className = "notice";
      empty.textContent = "No restaurants match this filter.";
      root.appendChild(empty);
      return;
    }

    var frame = document.createElement("div");
    frame.className = "table-frame";
    var table = document.createElement("table");
    table.className = "restaurants";
    var caption = document.createElement("caption");
    caption.className = "sr-only";
    caption.textContent = "Denver restaurants, with Michelin status, format, cost, and notes.";
    table.appendChild(caption);

    var thead = document.createElement("thead");
    var headRow = document.createElement("tr");
    COLUMNS.forEach(function (column) {
      var th = document.createElement("th");
      th.scope = "col";
      th.textContent = column;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    rows.forEach(function (place) {
      var tr = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.setAttribute("data-label", "Restaurant");
      var link = document.createElement("a");
      link.className = "place-name";
      link.href = safeHttpUrl(place.url) || place.url;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      link.textContent = place.name;
      var sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = " (opens in a new tab)";
      link.appendChild(sr);
      var meta = document.createElement("span");
      meta.className = "place-meta";
      meta.textContent = place.cuisine + ", " + place.hood;
      nameCell.appendChild(link);
      nameCell.appendChild(meta);

      var starCell = document.createElement("td");
      starCell.setAttribute("data-label", "Michelin");
      starCell.appendChild(starBadge(place.stars));

      var formatCell = document.createElement("td");
      formatCell.setAttribute("data-label", "Format");
      formatCell.textContent = place.format;

      var costCell = document.createElement("td");
      costCell.setAttribute("data-label", "Cost");
      costCell.textContent = place.price;

      var notesCell = document.createElement("td");
      notesCell.setAttribute("data-label", "Good to know");
      var notes = document.createElement("span");
      notes.className = "notes";
      notes.textContent = place.notes;
      notesCell.appendChild(notes);
      if (place.chef && knownChefs[place.chef]) {
        var chefLink = document.createElement("a");
        chefLink.className = "profile-link";
        chefLink.href = "#" + place.chef;
        chefLink.textContent = "See chef profile below";
        notesCell.appendChild(chefLink);
      }

      tr.appendChild(nameCell);
      tr.appendChild(starCell);
      tr.appendChild(formatCell);
      tr.appendChild(costCell);
      tr.appendChild(notesCell);
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    frame.appendChild(table);
    root.appendChild(frame);
  }

  function renderChefs() {
    var root = byId("chefs");
    if (!root) return;
    root.textContent = "";
    (data.chefs || []).forEach(function (chef) {
      if (!chef.id || !/^[A-Za-z0-9_-]+$/.test(chef.id)) return;
      var article = document.createElement("article");
      article.className = "chef";
      article.id = chef.id;
      article.tabIndex = -1;

      var heading = document.createElement("h2");
      heading.textContent = chef.heading;
      article.appendChild(heading);

      (chef.paragraphs || []).forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        article.appendChild(p);
      });

      if (chef.properties && chef.properties.length) {
        var dl = document.createElement("dl");
        dl.className = "properties";
        chef.properties.forEach(function (property) {
          var group = document.createElement("div");
          var dt = document.createElement("dt");
          dt.textContent = property.label;
          var dd = document.createElement("dd");
          dd.textContent = property.value;
          group.appendChild(dt);
          group.appendChild(dd);
          dl.appendChild(group);
        });
        article.appendChild(dl);
      }

      root.appendChild(article);
    });
  }

  function renderReading() {
    var root = byId("reading-cards");
    if (!root) return;
    root.textContent = "";
    var list = document.createElement("ul");
    list.className = "link-cards";
    (data.reading || []).forEach(function (item) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.className = "link-card";
      link.href = safeHttpUrl(item.href) || item.href;
      link.target = "_blank";
      link.rel = "noreferrer noopener";
      var title = document.createElement("span");
      title.className = "link-card-title";
      title.textContent = item.title;
      var site = document.createElement("span");
      site.className = "link-card-site";
      site.textContent = item.site;
      var sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = " (opens in a new tab)";
      link.appendChild(title);
      link.appendChild(site);
      link.appendChild(sr);
      li.appendChild(link);
      list.appendChild(li);
    });
    root.appendChild(list);
  }

  function renderSources() {
    var root = byId("sources");
    if (!root) return;
    root.textContent = "";
    (data.sources || []).forEach(function (source) {
      var li = document.createElement("li");
      li.textContent = source;
      root.appendChild(li);
    });
  }

  applyIntro();
  renderMetrics();
  renderFilters();
  renderTable();
  renderChefs();
  renderReading();
  renderSources();
})();
