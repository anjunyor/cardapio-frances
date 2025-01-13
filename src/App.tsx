import React from 'react';
import { Wine, UtensilsCrossed, ChefHat, Coffee } from 'lucide-react';
import MenuItem from './components/MenuItem';
import MenuSection from './components/MenuSection';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-gray-800 py-12 px-4 md:px-8">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-gray-900">Le Petit Bistrot</h1>
        <p className="font-light text-lg text-gray-600 italic">Culinária francesa contemporânea</p>
      </header>

      <div className="max-w-4xl mx-auto">
        {/* Entradas */}
        <MenuSection title="Entradas" icon={<UtensilsCrossed className="w-6 h-6" />}>
          <MenuItem
            name="Carpaccio de Filé Mignon"
            description="Finas fatias de filé mignon, rúcula, parmesão e molho de mostarda dijon"
            price="45,00"
            image="https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=2340"
          />
          <MenuItem
            name="Tartare de Atum"
            description="Atum fresco cortado na ponta da faca, abacate e crispy de wonton"
            price="52,00"
            image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=2340"
          />
        </MenuSection>

        {/* Pratos Principais */}
        <MenuSection title="Pratos Principais" icon={<ChefHat className="w-6 h-6" />}>
          <MenuItem
            name="Filé Mignon ao Molho Madeira"
            description="Filé mignon grelhado, servido com purê de batatas e legumes sauté"
            price="89,00"
            image="https://images.unsplash.com/photo-1546833160-1c5dc2e0ba0e?auto=format&fit=crop&q=80&w=2340"
          />
          <MenuItem
            name="Salmão Grelhado"
            description="Salmão fresco grelhado, risoto de limão siciliano e aspargos"
            price="78,00"
            image="https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=2340"
          />
        </MenuSection>

        {/* Sobremesas */}
        <MenuSection title="Sobremesas" icon={<Coffee className="w-6 h-6" />}>
          <MenuItem
            name="Cheesecake de Frutas Vermelhas"
            description="Cheesecake cremoso com calda de frutas vermelhas"
            price="28,00"
            image="https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80&w=2340"
          />
          <MenuItem
            name="Crème Brûlée"
            description="Clássica sobremesa francesa com baunilha Madagascar"
            price="26,00"
            image="https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?auto=format&fit=crop&q=80&w=2340"
          />
        </MenuSection>

        {/* Bebidas */}
        <MenuSection title="Bebidas" icon={<Wine className="w-6 h-6" />}>
          <MenuItem
            name="Caipirinha de Limão Siciliano"
            description="Cachaça artesanal, limão siciliano e açúcar"
            price="22,00"
            image="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=2340"
          />
          <MenuItem
            name="Vinho Tinto Château Margaux"
            description="Bordeaux, França - 750ml"
            price="890,00"
            image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2340"
          />
        </MenuSection>
      </div>
    </div>
  );
}

export default App;