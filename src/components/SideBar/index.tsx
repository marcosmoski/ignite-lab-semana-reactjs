
import { useGetLessonsQueryQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson";

export function SideBar() { 
  const { data } = useGetLessonsQueryQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-center">
        Cronograma de aulas 
      </span>
      {
        data?.lessons?.map((lesson) => {
          console.log(lesson.id)
          return (
            <div key={lesson.id} className="flex flex-col gap-8">
              <Lesson 
                      title={lesson.title} 
                      slug={lesson.slug ? lesson.slug : ""} 
                      availableAt={lesson.availableAt} 
                      lessonType={lesson.lessonType} />
            </div>
          )
        })
      }
      
    </aside>
  )
}