
export type CoursesType = {
  chapterDir?: string;
  scrollPos: number;
  lessons: {
    title: string;
    price: number;
    extended: boolean;
    subLessons: {
      title: string;
      link: string;
      done: boolean;
      locked?: boolean;
    }[];
  }[];
}
