'use client';

import { Todos } from '@/components/todos';
import { BackgroundGradientAnimation } from '@/components/ui/background';

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 px-4 pointer-events-all">
        <Todos />
      </div>
    </BackgroundGradientAnimation>
  );
}
