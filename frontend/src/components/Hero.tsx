import { motion } from 'framer-motion'
import { Phone, Users, Clock, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Фон с градиентами */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1a1a] to-[#0F172A] z-0" />
      
      {/* Декоративная полоса сверху */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-yellow-500 z-10" 
           style={{
             backgroundImage: 'repeating-linear-gradient(45deg, #eab308, #eab308 10px, #1a1a1a 10px, #1a1a1a 20px)',
           }}
      />
      
      {/* Анимированные градиентные пятна */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Верхняя полоса с текстом */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm md:text-base"
          >
            <div className="flex items-center gap-2 text-yellow-500">
              <div className="w-8 h-px bg-yellow-500" />
              <span className="font-semibold tracking-wider">ГОМЕЛЬ И ОБЛАСТЬ</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2 text-yellow-500">
              <span className="font-semibold tracking-wider">РАБОТАЕМ ЕЖЕДНЕВНО</span>
              <div className="w-8 h-px bg-yellow-500" />
            </div>
          </motion.div>

          {/* Главный заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-manrope leading-none">
              <div className="text-white mb-2">ГРУЗИМ.</div>
              <div className="text-white mb-2">ВЕЗЁМ.</div>
              <div className="text-yellow-500">РАСЧИЩАЕМ.</div>
            </h1>
          </motion.div>

          {/* Описание */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              GRUZILI GOMEL — грузоперевозки, переезды, грузчики, демонтаж и вывоз мусора любого объёма. 
              Приезжаем в день заявки, называем цену на месте, без доплат «по факту».
            </p>
          </motion.div>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a 
              href="tel:+375295990782"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-yellow-500 text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all"
            >
              <Phone size={24} />
              Позвонить сейчас
            </motion.a>
            <motion.a 
              href="#услуги"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:border-yellow-500 transition-all"
            >
              Все услуги
            </motion.a>
          </motion.div>

          {/* Преимущества снизу */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Опытные грузчики</div>
              <div className="text-gray-400 text-sm">От 20 руб/час</div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Быстрая подача</div>
              <div className="text-gray-400 text-sm">30-60 минут</div>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-white font-semibold">Гарантия качества</div>
              <div className="text-gray-400 text-sm">10+ лет опыта</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Нижняя граница */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero