const meetings = [
  ["1-2", new Date("March 05, 2024 20:00:00")],
  ["3-4", new Date("March 12, 2024 20:00:00")],
  ["5-6", new Date("March 19, 2024 20:00:00")],
  ["7-8", new Date("March 26, 2024 20:00:00")],
  ["9-10", new Date("April 02, 2024 20:00:00")],
  ["11-12", new Date("April 09, 2024 20:00:00")],
];

const today = new Date();

function getEnabledMeetingsKeys() {
  const [nextKey] = getNextMeeting();
  let enabledMeetings = [];
  for (let i = 0; i < meetings.length; i++) {
    if (nextKey == meetings[i][0]) {
      enabledMeetings.push(meetings[i][0]);
      return enabledMeetings;
    }
    enabledMeetings.push(meetings[i][0]);
  }
  return enabledMeetings;
}

export function isMeetingEnabled(key) {
  return getEnabledMeetingsKeys().includes(key);
}

export function getNextMeeting() {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
  };

  for (let i = 0; i < meetings.length; i++) {
    if (today < meetings[i][1]) {
      meetings[i][2] = meetings[i][1].toLocaleString("pt-BR", options) + "h";
      return meetings[i];
    }
  }
}
