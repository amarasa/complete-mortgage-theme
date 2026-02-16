/**
 * Interactive Map Block - jsVectorMap Integration
 *
 * Initializes the US map with highlighted states from data-highlighted-states attribute.
 * Requires jsVectorMap library to be loaded.
 */
(function() {
    'use strict';

    function initInteractiveMap() {
        var mapContainers = document.querySelectorAll('.interactive-map[data-highlighted-states]');

        mapContainers.forEach(function(container) {
            var mapElement = container.querySelector('#map');
            if (!mapElement) return;

            // Skip if already initialized
            if (mapElement.getAttribute('data-map-initialized')) return;

            var highlightedStates;
            try {
                highlightedStates = JSON.parse(container.getAttribute('data-highlighted-states')) || [];
            } catch (e) {
                console.error('Failed to parse highlighted states:', e);
                highlightedStates = [];
            }

            // Get primary color from CSS custom property
            var primaryColor = getComputedStyle(document.documentElement)
                .getPropertyValue('--color-primary')
                .trim() || '#642fd1';

            // Initialize jsVectorMap
            window.myMap = new jsVectorMap({
                selector: '#map',
                map: 'us_aea_en',
                backgroundColor: '#fff',
                zoomButtons: false,
                zoomOnScroll: false,
                zoomOnDoubleClick: false,
                selectedRegions: highlightedStates,
                regionStyle: {
                    initial: {
                        fill: '#E0E0E0'
                    },
                    selected: {
                        fill: primaryColor
                    }
                },
                labels: {
                    markers: {
                        render: function(name) {
                            return name;
                        },
                        offsets: function() {
                            return [0, -10];
                        },
                        cssClass: 'map-label'
                    }
                },
                tooltip: {
                    show: true,
                    style: {
                        color: '#ffffff',
                        borderRadius: '0px',
                        padding: '5px 10px'
                    }
                }
            });

            mapElement.setAttribute('data-map-initialized', 'true');

            // Recalculate dimensions on resize
            window.addEventListener('resize', function() {
                if (window.myMap) {
                    window.myMap.updateSize();
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInteractiveMap);
    } else {
        initInteractiveMap();
    }
})();
