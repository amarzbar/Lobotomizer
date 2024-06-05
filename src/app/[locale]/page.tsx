import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
          Lobotimize
          </span>
          <br />
          your phone today!
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          A no-frills solution to getting off your phone and staying off.
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href=''
            target='_blank'
          >
            <Button rounded size='large'>
              Get Started
            </Button>
          </a>
          <a
            href=''
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Absolute')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
            Generate a passcode to limit internet usage on iPhones in order to grab hold of the things that truly matter
            </p>

          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Safe</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
             Lobotimize will email you the passcode as your Fast ends. Giving you the power to carry on with your Fast. 
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Fool-Proof</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              No matter your current attachment to your phone, lobotomize is a fool-proof solution to weaning yourself off your device.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
