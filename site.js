---
---

var map = L.map('headerMap', {
    scrollWheelZoom: false,
    touchZoom: false
    }).setView([30.28315869171644, -97.74244308471678], 13);
var baseLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/jseppi.ipgbh1ko/{z}/{x}/{y}.png', {
    subdomains: 'abcd',
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
baseLayer.addTo(map);

function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),c&&!d&&a.apply(e,f)}}

var debouncedMapResize = debounce(function() {
$('#headerMap').height($('header').height());
map.invalidateSize();
}, 50);

$(window).resize(function () {
debouncedMapResize();
});

debouncedMapResize();

function githubWatchers() {
    var watchers = $('.followers');
    $.ajax({
        url: 'https://api.github.com/repos/' +
            'maptime' + '/' +
            '{{site.repo}}' + '/subscribers',
        dataType: 'jsonp',
        success: function(res) {
            if (!res.data.length) return;
            var template =
                "<a class='thumbnail contain' href='http://github.com/<%=login%>' style='background-image:url(<%=avatar_url%>)'>" +
                    "<span class='popup center fill-light strong small round pad0y pad1x'>" +
                        "<span class='truncate'><%=login%></span>" +
                    "</span>" +
                "</a>";
            var data = _(res.data)
                .map(function(i) { return _(template).template(i); })
                .reverse()
                .join('');

            watchers.append(data);
        }
    });
};

$(githubWatchers);
