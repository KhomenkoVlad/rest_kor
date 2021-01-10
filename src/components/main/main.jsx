import { Background } from './background/background';
import { QuickMenu } from './quickMenu/quickMenu';
import { MainAbout } from './mainAbout/mainAbout';

export const Main = () =>
  <>
    <main className='layer-main'>
      <Background />
      <section className='layer content'>
        <MainAbout />
        <QuickMenu />
      </section>
    </main>
  </>