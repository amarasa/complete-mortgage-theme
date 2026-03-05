/**
 * Statistics Block - Number Animation
 *
 * Animates statistics numbers when they come into view using IntersectionObserver.
 * Reads configuration from data-stats-config attribute on .statistics elements.
 */
(function() {
    'use strict';

    function animateNumbers(statElement, finalValue, prefix, suffix, duration) {
        let startTime = null;

        function updateNumber(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = (timestamp - startTime) / duration;
            progress = Math.min(progress, 1);

            let animatedValue = Math.floor(progress * finalValue);
            statElement.textContent = prefix + animatedValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }

        requestAnimationFrame(updateNumber);
    }

    function initStatistics() {
        const statisticsBlocks = document.querySelectorAll('.statistics[data-stats-config]');

        statisticsBlocks.forEach(function(block) {
            let statsData;
            try {
                statsData = JSON.parse(block.getAttribute('data-stats-config'));
            } catch (e) {
                console.error('Failed to parse statistics config:', e);
                return;
            }

            function startAnimation(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        let statElement = entry.target;
                        if (statElement.getAttribute('data-animated') === 'false') {
                            let statData = statsData.find(function(s) {
                                return s.id === statElement.id;
                            });
                            if (statData) {
                                animateNumbers(
                                    statElement,
                                    statData.number,
                                    statData.prefix,
                                    statData.suffix,
                                    statData.duration
                                );
                                statElement.setAttribute('data-animated', 'true');
                            }
                        }
                    }
                });
            }

            let observer = new IntersectionObserver(startAnimation, {
                root: null,
                threshold: 0.5
            });

            statsData.forEach(function(stat) {
                let statElement = document.getElementById(stat.id);
                if (statElement) {
                    observer.observe(statElement);
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStatistics);
    } else {
        initStatistics();
    }
})();
