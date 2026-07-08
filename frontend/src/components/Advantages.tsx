import { motion } from 'framer-motion'
import { 
  Clock, FileText, Shield, CreditCard, Award, Truck, MapPin, Heart, 
  Target, DollarSign, Users, Building, CheckCircle, Zap, ThumbsUp,
  Calendar, Briefcase, Handshake, Star, Sparkles, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const advantageCategories = [
  {
    title: '⏰ Режим работы',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
    bgImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    advantages: [
      { title: 'Работаем ежедневно', desc: 'Без выходных и праздников, 24/7', icon: Calendar },
      { title: 'Оперативность', desc: 'Быстрое выполнение любых задач', icon: Zap },
      { title: 'Быстрая подача', desc: 'Машина в течение 30-60 минут', icon: Truck },
      { title: 'Пунктуальность', desc: 'Всегда приезжаем вовремя', icon: Target },
    ]
  },
  {
    title: '📋 Официальная работа',
    icon: FileText,
    color: 'from-green-500 to-green-600',
    bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    advantages: [
      { title: 'Работаем официально', desc: 'Заключаем договор, выдаём чеки', icon: Shield },
      { title: 'Любая оплата', desc: 'Наличный и безналичный расчёт', icon: CreditCard },
      { title: 'Физическим лицам', desc: 'Работаем с частными клиентами', icon: Users },
      { title: 'Организациям', desc: 'Работаем по договору с юрлицами', icon: Building },
    ]
  },
  {
    title: '⭐ Опыт и качество',
    icon: Award,
    color: 'from-yellow-500 to-yellow-600',
    bgImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    advantages: [
      { title: '10+ лет опыта', desc: 'На рынке с 2014 года', icon: Calendar },
      { title: '5000+ заказов', desc: 'Огромный опыт работы', icon: ThumbsUp },
      { title: 'Рейтинг 5.0', desc: 'Высшие оценки от клиентов', icon: Star },
      { title: 'Опытные грузчики', desc: 'Профессионалы с опытом 5+ лет', icon: Award },
    ]
  },
  {
    title: '🛡️ Гарантия качества',
    icon: Shield,
    color: 'from-purple-500 to-purple-600',
    bgImage: 'https://tse1.explicit.bing.net/th/id/OIP.JAg6Z1unQ_vHm9qMDdsbIAHaFg?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    advantages: [
      { title: 'Без повреждений', desc: '100% сохранность вашего имущества', icon: CheckCircle },
      { title: 'Бережное отношение', desc: 'К вашему имуществу как к своему', icon: Heart },
      { title: 'Гарантия качества', desc: 'Несём ответственность за ваш груз', icon: Shield },
      { title: 'Свой автопарк', desc: 'Газели, пятитонники, фуры', icon: Briefcase },
    ]
  },
  {
    title: '📍 География работы',
    icon: MapPin,
    color: 'from-red-500 to-red-600',
    bgImage: 'https://tse2.mm.bing.net/th/id/OIP.1G5cv1ule30h5F685PjHrgHaFI?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    advantages: [
      { title: 'По Гомелю', desc: 'Работаем по всему городу', icon: MapPin },
      { title: 'По Беларуси', desc: 'Выезжаем в любую область', icon: Truck },
      { title: 'Индивидуальный подход', desc: 'Решаем задачи любой сложности', icon: Handshake },
      { title: 'Доступные цены', desc: 'Низкие расценки без скрытых платежей', icon: DollarSign },
    ]
  },
]

const Advantages = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0)

  return (
    <section id="преимущества" className="relative py-20 overflow-hidden">
      {/* Фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-secondary" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Почему мы</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Наши <span className="text-accent">преимущества</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Почему тысячи клиентов выбирают именно нас для грузовых работ
          </p>
        </motion.div>

        {/* Категории преимуществ */}
        <div className="max-w-5xl mx-auto space-y-4">
          {advantageCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategory === categoryIndex
            const Icon = category.icon

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
              >
                {/* Фоновое изображение */}
                <div 
                  className="absolute inset-0 opacity-30 hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${category.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Градиент поверх фона */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/50" />

                {/* Заголовок категории */}
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : categoryIndex)}
                  className="relative w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-manrope">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm hidden sm:block">
                      {category.advantages.length} преимуществ
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-accent" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Список преимуществ */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.advantages.map((advantage, advantageIndex) => {
                        const AdvIcon = advantage.icon
                        return (
                          <motion.div
                            key={advantage.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                            transition={{ delay: advantageIndex * 0.05 }}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                              <AdvIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-white mb-1">{advantage.title}</div>
                              <div className="text-gray-400 text-sm">{advantage.desc}</div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA внизу */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-xl border border-accent/30 rounded-2xl px-8 py-4">
            <p className="text-gray-300 text-lg">
              <span className="text-accent font-bold">20+ преимуществ</span> для вашего удобства
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantages
