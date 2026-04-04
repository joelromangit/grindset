import { useState } from 'react'
import { Lock, ShieldCheck, LogOut } from 'lucide-react'
import { useAdmin } from '../contexts/AdminContext'

export default function AdminLock() {
  const { isAdmin, login, logout } = useAdmin()
  const [showModal, setShowModal] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleClick() {
    if (isAdmin) {
      logout()
    } else {
      setShowModal(true)
      setPassword('')
      setError('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (login(password)) {
      setShowModal(false)
    } else {
      setError('Contrasena incorrecta')
    }
  }

  return (
    <>
      {isAdmin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'linear-gradient(135deg, rgba(108,92,231,0.95) 0%, rgba(72,52,212,0.95) 100%)',
          backdropFilter: 'blur(8px)',
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ShieldCheck size={16} color="white" />
            <span style={{ color: 'white', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Modo Profesor
            </span>
          </div>
          <button
            onClick={handleClick}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: 6,
              padding: '3px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: 'white',
              fontSize: '0.68rem',
              fontWeight: 600,
            }}
          >
            <LogOut size={12} /> Salir
          </button>
        </div>
      )}

      {!isAdmin && (
        <button
          onClick={handleClick}
          style={{
            position: 'fixed',
            bottom: 80,
            right: 16,
            zIndex: 1000,
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            opacity: 0.4,
          }}
        >
          <Lock size={14} color="var(--text-muted)" />
        </button>
      )}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Modo Profesor</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Contrasena"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <p style={{ color: 'var(--danger, #ef4444)', fontSize: '0.85rem', marginBottom: 12 }}>
                  {error}
                </p>
              )}
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
