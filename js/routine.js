  /**
   * Daily Routine
   * - This section is generated from the DAILY_ROUTINE array below.
   * - Update the routine by editing ONLY the array (no UI editing).
   */
  (function () {
    "use strict";

    // ✅ Edit your routine here (content taken from your screenshot)
    const DAILY_ROUTINE = [
      { start: "04:45AM", end: "05:00AM", activity: "Wakeup -> Brush -> Arrange Bed -> Green Tea & Check Tasks" },
      { start: "05:00AM", end: "07:00AM", activity: "ECSE743–FTE Capstone" },
      { start: "07:00AM", end: "08:30AM", activity: "Workout -> Skin Care & Shower -> Breakfast" },
      { start: "08:30AM", end: "10:25AM", activity: "ECSE743–FTE Capstone" },
      { start: "10:25AM", end: "11:00AM", activity: "News & Family Time" },
      { start: "11:00AM", end: "02:00PM", activity: "ECSE848–Internship Capstone-II" },
      { start: "02:00PM", end: "03:00PM", activity: "Lunch -> Rest" },
      { start: "03:00PM", end: "06:00PM", activity: "ECSE848–Internship Capstone-II" },
      { start: "06:00PM", end: "07:00PM", activity: "Smoke & Calls" },
      { start: "07:00PM", end: "09:00PM", activity: "ECSE848–Internship Capstone-II -> ECSE743–FTE Capstone" },
      { start: "09:00PM", end: "10:00PM", activity: "Dinner & Web Series" },
      { start: "10:00PM", end: "04:45PM", activity: "Rest" }
    ];

    function formatActivity(text) {
      // Make arrows nicer (still the same content)
      return String(text || "").replace(/\s*->\s*/g, " \u2192 ");
    }

    function renderRoutine() {
      const list = document.getElementById("dailyRoutineList");
      if (!list) return;

      list.innerHTML = "";

      DAILY_ROUTINE.forEach(function (item) {
        const wrapper = document.createElement("div");
        wrapper.className = "resume-item mb-4";

        const row = document.createElement("div");
        row.className = "row align-items-center";

        const timeCol = document.createElement("div");
        timeCol.className = "col-lg-3 mb-2 mb-lg-0";

        const timeSpan = document.createElement("span");
        timeSpan.className = "date d-block";
        timeSpan.innerHTML =
          '<span class="icon-calendar"></span> ' +
          item.start +
          " \u2013 " +
          item.end;

        timeCol.appendChild(timeSpan);

        const activityCol = document.createElement("div");
        activityCol.className = "col-lg-9";

        const activity = document.createElement("h3");
        activity.className = "mb-0";
        activity.textContent = formatActivity(item.activity);

        activityCol.appendChild(activity);

        row.appendChild(timeCol);
        row.appendChild(activityCol);

        wrapper.appendChild(row);
        list.appendChild(wrapper);
      });
    }

    document.addEventListener("DOMContentLoaded", renderRoutine);

    // Optional: expose for quick edits in DevTools console
    window.DAILY_ROUTINE = DAILY_ROUTINE;
    window.renderRoutine = renderRoutine;
  })();

