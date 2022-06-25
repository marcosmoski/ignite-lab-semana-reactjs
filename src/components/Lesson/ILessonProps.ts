
export interface ILessonProps { 
  title: string, 
  slug: string, 
  availableAt: Date, 
  lessonType: 'live' | 'class'
}