export interface IGetLessonsResponse { 
  lessons: {
    id: string,
    title: string, 
    slug: string, 
    availableAt: Date, 
    lessonType: 'live' | 'class'
  }[]
}