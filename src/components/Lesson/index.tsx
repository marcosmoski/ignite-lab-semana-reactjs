import { CheckCircle, Lock } from 'phosphor-react'
import { ILessonProps } from './ILessonProps';
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

export function Lesson(props: ILessonProps) { 
  const { slug } = useParams<{slug: string}>()
  const isLessonAvailable = isPast(new Date(props.availableAt));
  const availableDateFormatted = format(new Date(props.availableAt), 
                                        "EEEE' • 'd' de 'MMMM' • 'k'h'mm'", 
                                        {locale: ptBR})

  const isActiveLesson = slug === props.slug;
 
  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'> 
      <span className="text-gray-300">
        { availableDateFormatted }
      </span>



      <div className={
        classNames(`rounder border border-gray-500 p-4 mt-2 group-hover:border-green-500`, {
          "bg-green-500": isActiveLesson
        })
      }>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames("flex items-center gap-2 text-sm font-medium", {
              "text-white": isActiveLesson,
              "text-blue-500": !isActiveLesson
            })}> 
              <CheckCircle size={20}/>
              Conteúdo liberado 
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium"> 
              <Lock size={20}/>
              Em Breve
            </span>
          )}
         
          <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white borderfont-bold',{
            'border-white': isActiveLesson, 
            'border-green-300': !isActiveLesson
          })}> 
            {props.lessonType === 'live' ? "AO VIVO" : "AULA PRÁTICA"} 
          </span>
        </header>

        <strong className={classNames(" mt-5 block", { 
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
           {props.title}
        </strong>
      </div>
    </Link>
  )
}