// Primer 서비스 목록
// 이 파일 하나만 고치면 모든 Primer 서비스의 전환 메뉴(상단 오른쪽 점 9개 버튼)가 바뀝니다.
// 각 서비스는 이 파일을 불러와서 services 목록을 메뉴에 보여 줍니다.
// 배포 위치: minj725.github.io/primer/primer-nav.js
// 항목마다 name(이름)과 url(https:// 로 시작)이 꼭 있어야 하고, id와 desc(한 줄 설명)는 있으면 좋습니다.
window.PRIMER_NAV = {
  version: 1,
  services: [
    { id: 'meonjakgi', name: '먼작기', desc: '작년 기출 변형 N제와 4초 O/X 릴스', url: 'https://minj725.github.io/primer/' },
    { id: 'notes-live', name: 'Notes Live', desc: '수업 들으며 쓰는 필기', url: 'https://minj725.github.io/primer/notes-live/' }
  ]
};
