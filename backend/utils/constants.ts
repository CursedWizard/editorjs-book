

function getEmptyLesson(title: string) {
  return JSON.stringify({
  blocks: [
    {
      type: "header",
      data: {
        text: title,
        level: 2
      }
    },
  ],
  version: "2.12.4"
  })
}

export { getEmptyLesson };
