import Head from 'next/head'
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core'
import styles from '../styles/Home.module.css'
import { activateAndSetCookie } from '../utils/i18n'
import { Trans } from '@lingui/macro'
import dayjs from 'dayjs'
import { useTimezone } from '../store/useTimezone'

export default function Home(): JSX.Element {
  const localTimezone = useTimezone((state) => state.localTimezone)
  const defaultTimezone = useTimezone((state) => state.defaultTimezone)
  const setTimezone = useTimezone((state) => state.setTimezone)
  const handleTimeZone = (e: any) => {
    setTimezone(e.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Trans>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </Trans>
        </h1>
        <p>
          <Trans>This is line to test translation.</Trans>
        </p>
        <button onClick={() => activateAndSetCookie('en')}>English</button>
        <button onClick={() => activateAndSetCookie('hi')}>Hindi</button>
        <div>
          <p>
            LOCAL :{' '}
            {dayjs('2020-04-04T16:00:00.000Z')
              .tz(localTimezone)
              .format('MMM, DD, YYYY hh:mm A')}
          </p>
          <p>
            SGT :{' '}
            {dayjs('2020-04-04T16:00:00.000Z')
              .tz(defaultTimezone)
              .format('MMM, DD, YYYY hh:mm A')}
          </p>
          <select name="timezone" id="cars" onClick={handleTimeZone}>
            <option value="Asia/Calcutta">Asia/Calcutta</option>
            <option value="Asia/Singapore">Asia/Singapore</option>
          </select>
        </div>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button
          onClick={() => {
            window.alert('With typescript and Jest')
          }}
        >
          Test Button
        </button>
        <div>
          <Button color="primary" variant="contained">
            Testing Material UI Button
          </Button>
          <Checkbox
            value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }}
          />
        </div>

        <form
          onSubmit={() => {
            window.alert('Yay! MUI seems working fine.')
          }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Pop quiz: Can you see Button and checkbox above
            </FormLabel>
            <RadioGroup aria-label="quiz" name="quiz">
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            <FormHelperText>Choose Wisely</FormHelperText>
            <Button type="submit" variant="outlined" color="primary">
              Check Answer
            </Button>
          </FormControl>
        </form>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>
              <Trans>Documentation</Trans> &rarr;
            </h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>
              <Trans>Learn</Trans> &rarr;
            </h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>
              <Trans>Examples</Trans> &rarr;
            </h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>
              <Trans>Deploy</Trans> &rarr;
            </h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
