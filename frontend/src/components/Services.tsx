import { motion } from 'framer-motion'
import { 
  Truck, Users, Trash2, Hammer, Package, Warehouse, 
  Snowflake, Sparkles, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const serviceCategories = [
  {
    title: '🚚 Грузоперевозки и переезды',
    icon: Truck,
    color: 'from-blue-500 to-blue-600',
    bgImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
    services: [
      { title: 'Грузоперевозки', desc: 'Быстрая доставка грузов по Гомелю и Беларуси' },
      { title: 'Квартирные переезды', desc: 'Аккуратный переезд вашей квартиры под ключ' },
      { title: 'Офисные переезды', desc: 'Переезд офиса без простоя бизнеса' },
      { title: 'Грузовое такси', desc: 'Быстрая подача машины от 30 минут' },
    ]
  },
  {
    title: '👷 Услуги грузчиков',
    icon: Users,
    color: 'from-green-500 to-green-600',
    bgImage: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
    services: [
      { title: 'Услуги грузчиков', desc: 'Опытные грузчики от 20 руб/час' },
      { title: 'Подсобные рабочие', desc: 'Для строительных объектов и производств' },
      { title: 'Разнорабочие', desc: 'Для любых задач от 20 руб/час' },
      { title: 'Работа на складе', desc: 'Сортировка, упаковка, перемещение' },
    ]
  },
  {
     title: '📦 Подъём на этаж',
    icon: Package,
    color: 'from-purple-500 to-purple-600',
    bgImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    services: [
      { title: 'Подъём стройматериалов', desc: 'Кирпич, цемент, смеси. От 30 руб/этаж' },
      { title: 'Подъём плитки', desc: 'Керамическая и керамогранитная. От 35 руб/этаж' },
      { title: 'Подъём мебели', desc: 'Диваны, шкафы, кровати на любой этаж' },
      { title: 'Подъём бытовой техники', desc: 'Холодильники, стиральные машины' },
      { title: 'Подъём пианино и роялей', desc: 'Специальное оборудование' },
      { title: 'Подъём ванн и столешниц', desc: 'Чугунные, акриловые, каменные' },
    ]
  },
  {
    title: '🏗️ Разгрузка',
    icon: Warehouse,
    color: 'from-orange-500 to-orange-600',
    bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    services: [
      { title: 'Выгрузка контейнеров', desc: 'Морских и железнодорожных' },
      { title: 'Выгрузка фур', desc: 'Грузовых автомобилей' },
      { title: 'Выгрузка вагонов', desc: 'Железнодорожных вагонов' },
    ]
  },
  {
    title: '🗑️ Вывоз мусора',
    icon: Trash2,
    color: 'from-red-500 to-red-600',
    bgImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    services: [
      { title: 'Вывоз строительного мусора', desc: 'После ремонта и строительства' },
      { title: 'Вывоз хлама', desc: 'Очистка квартир и домов от старого хлама' },
      { title: 'Расчистка участка', desc: 'От мусора, веток, стройматериалов' },
    ]
  },
  {
    title: '🔨 Строительные работы',
    icon: Hammer,
    color: 'from-yellow-500 to-yellow-600',
    bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    services: [
      { title: 'Демонтажные работы', desc: 'Стены, полы, потолки, сантехника' },
      { title: 'Сборка мебели', desc: 'Профессиональная сборка любой мебели' },
      { title: 'Разборка мебели', desc: 'Аккуратная разборка перед переездом' },
    ]
  },
  {
    title: '❄️ Уборка снега',
    icon: Snowflake,
    color: 'from-cyan-500 to-cyan-600',
    bgImage: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80',
    services: [
      { title: 'Расчистка снега', desc: 'Механизированная и ручная' },
      { title: 'Уборка снега', desc: 'С крыш, дворов, парковок' },
      { title: 'Расчистка парковок', desc: 'Оперативная после снегопада' },
      { title: 'Ручная уборка территории', desc: 'Листва, мусор, снег' },
    ]
  },
]

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0)

  return (
    <section id="услуги" className="relative py-20 overflow-hidden">
      {/* Фон секции */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Все услуги</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">
            Наши <span className="text-accent">услуги</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Полный спектр грузовых услуг в Гомеле. Более <span className="text-accent font-semibold">30 видов работ</span> для физических и юридических лиц.
          </p>
        </motion.div>

        {/* Категории услуг */}
        <div className="max-w-5xl mx-auto space-y-4">
          {serviceCategories.map((category, categoryIndex) => {
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
                {/* Фоновое изображение - более заметное */}
                <div 
                  className="absolute inset-0 opacity-30 hover:opacity-40 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${category.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                
                {/* Градиент поверх фона - более прозрачный */}
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
                      {category.services.length} услуг
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-accent" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Список услуг */}
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
                      {category.services.map((service, serviceIndex) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                          transition={{ delay: serviceIndex * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color} mt-2 flex-shrink-0`} />
                          <div>
                            <div className="font-semibold text-white mb-1">{service.title}</div>
                            <div className="text-gray-400 text-sm">{service.desc}</div>
                          </div>
                        </motion.div>
                      ))}
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
          <p className="text-gray-300 text-lg">
            И <span className="text-accent font-bold">многое другое</span>. 
            <span className="block mt-2 text-gray-400">Звоните — обсудим вашу задачу!</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
