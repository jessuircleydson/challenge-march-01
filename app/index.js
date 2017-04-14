const clockContainer = document.querySelector('.clock');

const [
        getFullDate,
        refreshSeconds,
        refreshMinutes,
        refreshHours,
        refreshAll,
        initClock 
      ] = [
       () => new Date(),
       () => getFullDate().getSeconds(),
       () => getFullDate().getMinutes(),
       () => getFullDate().getHours(),
       () => {
          let cSeconds = document.getElementById('seconds');
          let cMinutes = document.getElementById('minutes');
          let cHours   = document.getElementById('hours');

          setInterval(() => {
            (refreshMinutes() == 0) ? cHours.innerHTML   = refreshHours()   : void(0);
            (refreshSeconds() == 0) ? cMinutes.innerHTML = refreshMinutes() : void(0);
            cSeconds.innerHTML = refreshSeconds();
          }, 1000);
        },
        (clc, hours, minutes, seconds) => {

          let x = (hours, minutes, seconds) => {
            clc.innerHTML = hours+':'+minutes+':'+seconds;
            return refreshAll();
          };

          return x;
        }
      ];
let [
      hours,
      minutes,
      seconds
    ] = [
      '<span id="hours">'+ getFullDate().getHours() +'</span>',
      '<span id="minutes">'+ getFullDate().getMinutes() +'</span>',
      '<span id="seconds">'+ refreshSeconds() +'</span>',
    ];

initClock(clockContainer)(hours, minutes, seconds);

