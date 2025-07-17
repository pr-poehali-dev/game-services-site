import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    {
      id: 1,
      title: "Genshin Impact",
      description: "Пополнение примогемов и кристаллов",
      price: "от 100₽",
      image: "🎮",
      category: "RPG",
      popular: true,
    },
    {
      id: 2,
      title: "Valorant",
      description: "VP (Valorant Points) и Radianite",
      price: "от 200₽",
      image: "🎯",
      category: "FPS",
      popular: true,
    },
    {
      id: 3,
      title: "Fortnite",
      description: "V-Bucks и Battle Pass",
      price: "от 150₽",
      image: "🏗️",
      category: "Battle Royale",
      popular: false,
    },
    {
      id: 4,
      title: "League of Legends",
      description: "RP (Riot Points) и премиум контент",
      price: "от 120₽",
      image: "⚔️",
      category: "MOBA",
      popular: false,
    },
    {
      id: 5,
      title: "Minecraft",
      description: "Minecoins и Realms подписка",
      price: "от 80₽",
      image: "🧱",
      category: "Sandbox",
      popular: false,
    },
    {
      id: 6,
      title: "Roblox",
      description: "Robux и премиум подписка",
      price: "от 90₽",
      image: "🎲",
      category: "Platform",
      popular: false,
    },
  ];

  const stats = [
    { label: "Довольных клиентов", value: "19,323", icon: "Users" },
    { label: "Завершенных заказов", value: "200,000+", icon: "ShoppingCart" },
    { label: "Поддерживаемых игр", value: "2", icon: "Gamepad2" },
    { label: "Лет опыта", value: "5+", icon: "Clock" },
  ];

  return (
    <div className="min-h-screen bg-gaming-darker text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-gaming-dark/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-neon-green animate-glow">
                AliveyPay
              </div>
              <Badge variant="outline" className="border-neon-green text-neon-green">
                PRO
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-foreground hover:text-neon-green transition-colors">
                Главная
              </a>
              <a href="#" className="text-foreground hover:text-neon-green transition-colors">
                Игры
              </a>
              <a href="#" className="text-foreground hover:text-neon-green transition-colors">
                Пополнение
              </a>
              <a href="#" className="text-foreground hover:text-neon-green transition-colors">
                Профиль
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-gaming-dark">
                Войти
              </Button>
              <Button size="sm" className="bg-neon-green text-gaming-dark hover:bg-neon-green/90">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gaming-dark to-gaming-darker">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-pink bg-clip-text text-transparent animate-fade-in">
              Пополнение игровой валюты
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Быстро, безопасно и выгодно пополняйте баланс в любимых играх
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-neon-green text-gaming-dark hover:bg-neon-green/90 text-lg px-8 py-6">
                <Icon name="Zap" className="mr-2 h-5 w-5" />
                Начать пополнение
              </Button>
              <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-gaming-dark text-lg px-8 py-6">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gaming-gray/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-green/20 rounded-full mb-4">
                  <Icon name={stat.icon} className="h-8 w-8 text-neon-green" />
                </div>
                <div className="text-3xl font-bold text-neon-green mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-green">Популярные игры</h2>
            <p className="text-xl text-muted-foreground">Выберите игру для пополнения</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-gaming-gray/20 rounded-lg p-2">
              <Input 
                placeholder="Поиск игры..."
                className="bg-transparent border-0 text-foreground placeholder-muted-foreground"
              />
              <Button size="sm" className="bg-neon-green text-gaming-dark hover:bg-neon-green/90">
                <Icon name="Search" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <Card key={game.id} className="bg-gaming-gray/20 border-gaming-light hover:border-neon-green transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20 animate-scale-in">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{game.image}</div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{game.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {game.category}
                        </Badge>
                      </div>
                    </div>
                    {game.popular && (
                      <Badge className="bg-neon-pink text-gaming-dark">
                        Популярно
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {game.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-neon-green">{game.price}</span>
                    <Button size="sm" className="bg-neon-green text-gaming-dark hover:bg-neon-green/90">
                      <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                      Пополнить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gaming-gray/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-neon-pink">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают именно нас</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gaming-gray/20 border-gaming-light text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-green/20 rounded-full mb-6">
                <Icon name="Zap" className="h-8 w-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neon-green">Мгновенная доставка</h3>
              <p className="text-muted-foreground">Валюта поступает на ваш аккаунт в течение 1-3 минут</p>
            </Card>

            <Card className="bg-gaming-gray/20 border-gaming-light text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-pink/20 rounded-full mb-6">
                <Icon name="Shield" className="h-8 w-8 text-neon-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neon-pink">100% безопасно</h3>
              <p className="text-muted-foreground">Используем только официальные способы пополнения</p>
            </Card>

            <Card className="bg-gaming-gray/20 border-gaming-light text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-blue/20 rounded-full mb-6">
                <Icon name="Headphones" className="h-8 w-8 text-neon-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neon-blue">24/7 поддержка</h3>
              <p className="text-muted-foreground">Наша команда готова помочь в любое время</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gaming-dark border-t border-gaming-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-neon-green">AliveyPay</div>
              <Badge variant="outline" className="border-neon-green text-neon-green">
                PRO
              </Badge>
            </div>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-neon-green transition-colors">Условия использования</a>
              <a href="#" className="hover:text-neon-green transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-neon-green transition-colors">Поддержка</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gaming-light text-center text-muted-foreground">
            <p>© 2024 AliveyPay. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;