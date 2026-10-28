// Route map: skill filter (lights lines and stations that use a skill) and one scroll-in draw.
(function () {
    document.documentElement.classList.add('js');
    var map = document.querySelector('.route');
    if (!map) return;
    var buttons = map.querySelectorAll('.skill');
    var lines = map.querySelectorAll('.line');
    var status = map.querySelector('.skills__status');
    var all = 'Showing all ' + lines.length + ' lines.';
    status.textContent = all;

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
        }, { threshold: 0.3 });
        lines.forEach(function (l) { io.observe(l); });
    } else {
        lines.forEach(function (l) { l.classList.add('is-in'); });
    }

    function uses(el, skill) { return (' ' + (el.dataset.skills || '') + ' ').indexOf(' ' + skill + ' ') > -1; }

    function apply(skill, label) {
        var hits = 0;
        lines.forEach(function (line) {
            var on = !skill || uses(line, skill);
            line.classList.toggle('is-dim', !on);
            line.classList.toggle('is-lit', !!skill && on);
            if (on) hits++;
            line.querySelectorAll('li').forEach(function (st) {
                var hit = !!skill && uses(st, skill);
                st.classList.toggle('is-hit', hit);
                var note = st.querySelector('.visually-hidden');
                if (note) note.remove();
                if (hit) {
                    note = document.createElement('span');
                    note.className = 'visually-hidden';
                    note.textContent = ' (uses ' + label + ')';
                    st.appendChild(note);
                }
            });
        });
        status.textContent = !skill ? all : hits ? label + ' runs on ' + hits + ' of ' + lines.length + ' lines.' : 'No line uses ' + label + ' yet.';
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var on = btn.getAttribute('aria-pressed') === 'true';
            buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
            if (!on) btn.setAttribute('aria-pressed', 'true');
            apply(on ? '' : btn.dataset.skill, btn.textContent);
        });
    });
})();
