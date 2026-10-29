import React from 'react';

/**
 * GrowthHikes Vector Brand Logo
 * Based on official brand identity:
 * - Diamond-rotated outer bezel frame
 * - 3 ascending stepped diagonal ribbons
 * - Terminating in an upward-pointing 45° growth arrow
 * - Precision dual-layer metallic shading (gold/emerald)
 * - Modern geometric typography with tracked subheadline
 */
export default function Logo({
  variant = 'full', // 'full' | 'mark'
  accent = 'gold',  // 'gold' | 'emerald'
  height = 36,
  className = '',
  showTagline = true,
}) {
  const isEmerald = accent === 'emerald';

  // Primary palette IDs for SVG defs to avoid collisions
  const outerGradId = isEmerald ? 'ghEmeraldOuter' : 'ghGoldOuter';
  const barGradId = isEmerald ? 'ghEmeraldBar' : 'ghGoldBar';
  const glowFilterId = isEmerald ? 'ghEmeraldGlow' : 'ghGoldGlow';

  return (
    <div
      className={`growthhikes-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'full' ? '12px' : '0',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      {/* Scalable Vector Emblem */}
      <svg
        viewBox="0 0 120 120"
        height={height}
        width={height}
        style={{ flexShrink: 0, display: 'block' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {isEmerald ? (
            <>
              <linearGradient id={outerGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8dffe0" />
                <stop offset="50%" stopColor="#1ddca8" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id={barGradId} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#047857" />
                <stop offset="35%" stopColor="#059669" />
                <stop offset="65%" stopColor="#1ddca8" />
                <stop offset="85%" stopColor="#8dffe0" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
              <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1ddca8" floodOpacity="0.4" />
              </filter>
            </>
          ) : (
            <>
              <linearGradient id={outerGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="30%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id={barGradId} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#92400e" />
                <stop offset="25%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#fef08a" />
                <stop offset="75%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.35" />
              </filter>
            </>
          )}
        </defs>

        <g transform="translate(60, 60)">
          {/* Rotated Diamond Bezel Frame */}
          <g transform="rotate(45)">
            <rect
              x="-38"
              y="-38"
              width="76"
              height="76"
              rx="12"
              fill="none"
              stroke={`url(#${outerGradId})`}
              strokeWidth="3.2"
              strokeOpacity="0.95"
            />
            <rect
              x="-33"
              y="-33"
              width="66"
              height="66"
              rx="9"
              fill="none"
              stroke={`url(#${outerGradId})`}
              strokeWidth="1.2"
              strokeOpacity="0.35"
            />
          </g>

          {/* 3 Stepped Growth Bars with Arrowhead */}
          <g transform="translate(-60, -60) scale(0.6)" filter={`url(#${glowFilterId})`}>
            {/* Bar 1 (Left - Shortest) */}
            <path
              d="M 52 118 L 74 94 Q 78 89 84 94 L 88 98 Q 92 103 87 109 L 66 132 Q 60 138 54 133 L 51 129 Q 47 124 52 118 Z"
              fill={`url(#${barGradId})`}
            />

            {/* Bar 2 (Middle - Stepped Higher) */}
            <path
              d="M 76 108 L 105 76 Q 109 71 115 76 L 119 80 Q 123 85 118 91 L 90 122 Q 84 128 78 123 L 75 119 Q 71 114 76 108 Z"
              fill={`url(#${barGradId})`}
            />

            {/* Bar 3 (Right - Highest with Upward Arrow Tip) */}
            <path
              d="M 100 98 L 126 69 L 118 69 Q 115 69 116 65 L 117 63 Q 118 60 122 60 L 148 60 Q 152 60 152 64 L 152 90 Q 152 94 148 94 L 146 94 Q 142 94 142 90 L 142 82 L 114 113 Q 108 119 102 114 L 99 110 Q 95 104 100 98 Z"
              fill={`url(#${barGradId})`}
            />
          </g>
        </g>
      </svg>

      {/* Brand Typography (when variant === 'full') */}
      {variant === 'full' && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              fontSize: `${height * 0.52}px`,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'baseline',
              gap: '2px',
            }}
          >
            <span>GROWTH</span>
            <span
              style={{
                color: isEmerald ? '#1ddca8' : '#f59e0b',
                background: isEmerald
                  ? 'linear-gradient(135deg, #8dffe0, #1ddca8)'
                  : 'linear-gradient(135deg, #fef08a, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HIKES
            </span>
          </div>

          {showTagline && (
            <span
              style={{
                fontSize: `${Math.max(height * 0.22, 9)}px`,
                fontWeight: 700,
                letterSpacing: '0.24em',
                color: '#94a3b8',
                textTransform: 'uppercase',
                marginTop: '1px',
              }}
            >
              UNLOCK YOUR POTENTIAL
            </span>
          )}
        </div>
      )}
    </div>
  );
}
