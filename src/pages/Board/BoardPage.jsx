import React from 'react'
import s from "./board.module.css"
import SearchIcon from "../../assets/icon/Search.svg"
import CommentIcon from "../../assets/icon/Comment small Icon.svg"
import PlusIcon from "../../assets/icon/Plus Icon.svg"
import PlusIconBlack from "../../assets/icon/Plus Icon black.svg"
import UserIcon from "../../assets/icon/User Icon.svg"

const BoardPage = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.Board}>
          <div className={s.header}>
            <h1 className={s.title}>Расписание</h1>
            <div className={s.search}>
              <input type="text" placeholder='Поиск по предмету' className={s.input} />
              <img src={SearchIcon} alt="icon" />
            </div>
          </div>
          <div className={s.tabs}>
            <div className={s.tabWrapper}>
              <div className={`${s.tab} ${s.tabActive}`}>Общая информация</div>
            </div>
            <div className={s.tabWrapper}>
              <div className={`${s.tab}`}>
                Табель студента
                <span className={s.tabCounter}>0</span>
              </div>
            </div>
          </div>
          <div className={s.body}>
            <div className={s.column}>
              <div className={s.card}>
                <div className="flex items-center gap-5">
                  <span className={`${s.circle} ${s.circleLime}`}/>
                  <span className='text-black'>Задачи (3+)</span>
                </div>
              </div>
              {Array.from({length: 3}).map((_, index) => (
                <div className={s.card} key={index}>
                  <div className={s.cardContent}>
                    <h4 className={s.cardTitle}>Математика</h4>
                    <h5 className={s.cardSubtitle}>Тема: Практика Матрица</h5>
                    <p className={s.cardDesc}>Практика:</p>
                    <p className={s.cardDesc}>Сдать до 23.05.2025</p>
                  </div>
                  <div className={s.cardSecondContent}>
                    <img src={CommentIcon} alt="comment icon" />
                    <span className='text-black text-sm'>Матрицу сдать всем! Без сбо..</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.column}>
              <div className={s.card}>
                <div className="flex items-center gap-5">
                  <span className={`${s.circle} ${s.circleGreen}`}/>
                  <span className='text-black'>Пары этой недели (1)</span>
                </div>
              </div>
              {Array.from({length: 2}).map((_, index) => (
                <div className={s.card} key={index}>
                  <div className={s.cardContent}>
                    <h4 className={s.cardTitle}>Математика</h4>
                    <h5 className={s.cardSubtitle}>Тема: Интегралы</h5>
                    <p className={s.cardDesc}>Лекция: 25.05.2025</p>
                  </div>
                  <div className={s.cardSecondContent}>
                    <img src={CommentIcon} alt="comment icon" />
                    <span className='text-black text-sm'>Прищельцы атакуют!</span>
                  </div>
                  <div className='flex items-center gap-5 justify-between'>
                    <div className="flex items-center gap-5">
                      <img src={PlusIcon} alt="plus icon"/>
                      <span className='text-black'>Дело</span>
                      <span className={s.tabCounter}>0</span>
                    </div>
                    <img src={UserIcon} alt='user icon'/>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.column}>
              <div className={s.card}>
                <div className="flex items-center gap-5">
                  <span className={`${s.circle} ${s.circleErin}`}/>
                  <span className='text-black'>На сегодня (1)</span>
                </div>
              </div>
              {Array.from({length: 2}).map((_, index) => (
                <div className={s.card} key={index}>
                  <div className={s.cardContent}>
                    <h4 className={s.cardTitle}>Русский язык</h4>
                    <h5 className={s.cardSubtitle}>Тема: Деловой стиль</h5>
                    <p className={s.cardDesc}>Лекция: 25.05.2025</p>
                  </div>
                  <div className={s.cardSecondContent}>
                    <img src={CommentIcon} alt="comment icon" />
                    <span className='text-black text-sm'>Идет дипломат с дипломатом!</span>
                  </div>
                  <div className='flex items-center gap-5 justify-between'>
                    <div className="flex items-center gap-5">
                      <img src={PlusIcon} alt="plus icon"/>
                      <span className='text-black'>Дело</span>
                      <span className={s.tabCounter}>0</span>
                    </div>
                    <img src={UserIcon} alt='user icon'/>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.column}>
              <div className={s.card}>
                <div className="flex items-center gap-5">
                  <span className={`${s.circle} ${s.circleBlue}`}/>
                  <span className='text-black'>На следующей неделе  (1)</span>
                </div>
              </div>
              <img
                src={PlusIconBlack}
                alt='plus icon'
                style={{
                  width: 24,
                  height: 24
                }}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BoardPage