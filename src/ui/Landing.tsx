import { useState } from 'preact/hooks';
import { auth, enteredApp } from '../state';
import { requestCode, verifyCode } from '../sync/client';
import { cloudSyncEnabled } from '../sync/config';
import { afterSignIn } from '../session/controller';

type Step = 'intro' | 'code' | 'working';

export function Landing() {
  const [step, setStep] = useState<Step>('intro');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [agreed, setAgreed] = useState(false);

  const sendCode = async () => {
    const addr = email.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr)) {
      setError('Enter a valid email address.');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms and Privacy Policy first.');
      return;
    }
    setError('');
    setStep('working');
    try {
      await requestCode(addr);
      setStep('code');
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStep('intro');
    }
  };

  const submitCode = async () => {
    setError('');
    setStep('working');
    try {
      const a = await verifyCode(email.trim(), code.trim());
      auth.value = a; // opens the app (and persists the token)
      await afterSignIn();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setStep('code');
    }
  };

  return (
    <div class="screen landing">
      <div class="landing-hero">
        <div class="logo">言葉</div>
        <h1>Kotoba</h1>
        <p class="tagline">Learn Japanese by voice, hands-free, on your commute.</p>
      </div>

      <ol class="landing-steps">
        <li>
          <span class="step-num">1</span>
          <span><strong>Put in your AirPods</strong> — or connect your car's audio and mount the phone.</span>
        </li>
        <li>
          <span class="step-num">2</span>
          <span><strong>Tap START once</strong> — that's the last time you touch the screen.</span>
        </li>
        <li>
          <span class="step-num">3</span>
          <span><strong>Just talk</strong> — it teaches a word, you say it back, and it quizzes you right before you'd forget.</span>
        </li>
      </ol>

      {cloudSyncEnabled ? (
        <div class="landing-auth">
          {step === 'code' ? (
            <>
              <p class="auth-label">
                We emailed a 6-digit code to <strong>{email}</strong>. Enter it below.
              </p>
              <input
                class="auth-input"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="123456"
                value={code}
                onInput={(e) => setCode((e.currentTarget as HTMLInputElement).value)}
              />
              <button class="auth-btn" onClick={() => void submitCode()}>
                Verify &amp; continue
              </button>
              <button class="auth-link" onClick={() => { setStep('intro'); setCode(''); }}>
                Use a different email
              </button>
            </>
          ) : (
            <>
              <p class="auth-label">
                Sign up free to unlock every deck — nearly 3,000 words through JLPT N3 — and sync progress across
                devices:
              </p>
              <input
                class="auth-input"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@email.com"
                value={email}
                disabled={step === 'working'}
                onInput={(e) => setEmail((e.currentTarget as HTMLInputElement).value)}
              />
              <label class="auth-consent">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed((e.currentTarget as HTMLInputElement).checked)} />
                <span>
                  I agree to the{' '}
                  <a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms</a> and{' '}
                  <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </span>
              </label>
              <button class="auth-btn" disabled={step === 'working'} onClick={() => void sendCode()}>
                {step === 'working' ? 'Sending…' : 'Email me a code'}
              </button>
            </>
          )}
          {error && <p class="auth-error">{error}</p>}
          <button class="auth-link guest" onClick={() => (enteredApp.value = true)}>
            Try it without an account — N5 Starter deck
          </button>
          <p class="auth-fineprint">
            By using Kotoba you agree to the <a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms</a> and{' '}
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
        </div>
      ) : (
        <div class="landing-auth">
          <button class="auth-btn" onClick={() => (enteredApp.value = true)}>
            Start learning
          </button>
        </div>
      )}
    </div>
  );
}
