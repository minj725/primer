// Primer 수업 시간표
// 학기마다 이 파일 하나만 고치면 됩니다. Notes Live가 이 파일을 불러와서 지금 시각에 맞는 수업 방을 자동으로 정합니다.
// 배포 위치: minj725.github.io/primer/primer-schedule.js
// day는 1=월 ... 5=금, 시각은 한국 시간 "HH:MM" 형식입니다.
// 항목마다 id, name, day, start, end가 모두 있어야 하고, 모양이 틀린 항목은 조용히 무시됩니다.
window.PRIMER_SCHEDULE = {
  version: 1,
  term: '2026-2',
  margin_min: 30,          // 수업 앞뒤 여유 시간(분)
  classes: [               // day: 1=월 … 5=금, 시각은 한국 시간
    { id: 'medres3',  name: '의과학연구기초III', day: 1, start: '15:00', end: '17:45' },
    { id: 'medgen',   name: '의학유전학',        day: 3, start: '09:00', end: '11:45' },
    { id: 'socbrain', name: '사회적뇌와인간행동', day: 3, start: '13:30', end: '16:15' },
    { id: 'biochem',  name: '생화학',            day: 5, start: '09:00', end: '11:45' },
    { id: 'biolab',   name: '생화학실습',        day: 5, start: '13:30', end: '17:45' }
  ],
  exceptions: [            // 휴강: {date:'2026-11-27', id:'biochem', type:'cancel'}
                           // 보강: {date:'2026-12-01', id:'biochem', type:'makeup', start:'13:00', end:'15:45'}
  ]
};
