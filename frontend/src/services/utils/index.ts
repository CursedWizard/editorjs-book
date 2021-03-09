
export const redirect = (url: string): void => {
  window.history.pushState("", "", url);
  window.history.pushState("", "", url);
  window.history.back();
}


/**
 * Change the type of Keys of T from NewType
 */
export type ChangeTypeOfKeys<
  T,
  Keys extends keyof T,
  NewType
> = {
  // Loop to every key. We gonna check if the key
  // is assignable to Keys. If yes, change the type.
  // Else, retain the type.
  [key in keyof T]: key extends Keys ? NewType : T[key]
}

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

async function getCourseInfo()
{
    let requestOptions: any = {
      method: "GET",
      redirect: "follow"
    };

    const result: CoursesType = await (
      await fetch("http://localhost:3000/getShit", requestOptions)
    ).json();
    if (!result.lessons)
      result.lessons = [];

    console.log(result)


	// let result = await (await fetch("https://2keep.ru/api/v2/course/list/getTheoryCoursesList", 
	// 	requestOptions)).json();
	//
	
	// const data: CoursesType = {
    // scrollPos: 0,
	// 	lessons: [
	// 		{
	// 			title: "Текстовые задачи",
	// 			price: 0,
        // extended: false,
        // purchased: false,
        // percentage: 0,
	// 			subLessons: [
	// 				{
	// 					title: "Введение",
	// 					link: "/web/theory-courses/math/lesson-1",
	// 					done: false
	// 				},
	// 				{
	// 					title: "Контент",
	// 					link: "/web/theory-courses/math/lesson-2",
	// 					done: false
	// 				},
	// 				{
	// 					title: "Заключение",
	// 					link: "/web/theory-courses/math/lesson-3",
	// 					done: false
	// 				}
	// 			]
	// 		},

	// 		{
	// 			title: "Графики и диаграмы",
	// 			price: 0,
        // extended: false,
        // purchased: false,
        // percentage: 25,
	// 			subLessons: [
	// 				{
	// 					title: "Введение",
	// 					link: "/web/theory-courses/math/lesson-4",
	// 					done: true
	// 				},
	// 				{
	// 					title: "Контент",
	// 					link: "/web/theory-courses/math/lesson-5",
	// 					done: true
	// 				},
	// 				{
	// 					title: "Контент-2",
	// 					link: "/web/theory-courses/math/lesson-5",
	// 					done: false
	// 				},
	// 				{
	// 					title: "Заключение",
	// 					link: "/web/theory-courses/math/lesson-6",
	// 					done: false
	// 				}
	// 			]
	// 		},

	// 		{
	// 			title: "Начала теории вероятности",
	// 			price: 100,
        // extended: false,
        // purchased: false,
        // percentage: 33,
	// 			subLessons: [
	// 				{
	// 					title: "Введение",
	// 					link: "/web/theory-courses/math/lesson-7",
	// 					done: false,
	// 					locked: true
	// 				},
	// 				{
	// 					title: "Контент",
	// 					link: "/web/theory-courses/math/lesson-8",
	// 					done: false,
	// 					locked: true
	// 				},
	// 				{
	// 					title: "Заключение",
	// 					link: "/web/theory-courses/math/lesson-9",
	// 					done: false,
	// 					locked: true
	// 				}
	// 			]
	// 		},

	// 		{
	// 			title: "Производная и первообразная",
	// 			price: 150,
        // purchased: false,
        // extended: true,
        // percentage: 43,
	// 			subLessons: [
	// 				{
	// 					title: "Введение",
	// 					link: "/web/theory-courses/math/lesson-20",
	// 					done: true,
	// 					locked: true
	// 				},
	// 				{
	// 					title: "Контент",
	// 					link: "/web/theory-courses/math/lesson-21",
	// 					done: true,
	// 					locked: true
	// 				},
	// 				{
	// 					title: "Заключение",
	// 					link: "/web/theory-courses/math/lesson-22",
	// 					done: false,
	// 					locked: true
	// 				}
	// 			]
	// 		}
	// 	]
		
	// }
	return result;

}


export {getCourseInfo};
