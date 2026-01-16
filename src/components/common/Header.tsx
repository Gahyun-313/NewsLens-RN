import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const HIT_SLOP = { top: 10, bottom: 10, left: 10, right: 10 };

const UPDATE_HOURS = [3, 6, 9, 12, 15, 18, 21, 24] as const;

const getNextUpdateAt = (now: Date) => {
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();

  for (const hour of UPDATE_HOURS) {
    const candidate =
      hour === 24
        ? new Date(y, m, d + 1, 0, 0, 0, 0)
        : new Date(y, m, d, hour, 0, 0, 0);

    if (candidate.getTime() > now.getTime()) return candidate;
  }

  return new Date(y, m, d + 1, 0, 0, 0, 0);
};

const getRemainSeconds = (now: Date, next: Date) =>
  Math.max(0, Math.floor((next.getTime() - now.getTime()) / 1000));

/** 타이머 표기: 항상 hh:mm:ss */
const formatRemainText = (sec: number) => {
  const total = Math.max(0, sec);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};


/**
 * ExploreHeaderWithTimer
 * - 왼쪽: 다음 업데이트까지 남은 시간(옵션)
 * - 가운데: 타이틀(항상 화면 정중앙)
 */
const ExploreHeaderWithTimer = React.memo(function ExploreHeaderWithTimer({
  title = '실시간 급상승 뉴스',
  showTimer = true,
  backgroundColor = '#FFFFFF',
}: {
  title?: string;
  showTimer?: boolean;
  backgroundColor?: string;
}) {
  const [nextUpdateAt, setNextUpdateAt] = useState<Date>(() =>
    getNextUpdateAt(new Date()),
  );
  const [remainSec, setRemainSec] = useState<number>(() =>
    getRemainSeconds(new Date(), nextUpdateAt),
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date();

      if (now.getTime() >= nextUpdateAt.getTime()) {
        const next = getNextUpdateAt(now);
        setNextUpdateAt(next);
        setRemainSec(getRemainSeconds(now, next));
        return;
      }

      setRemainSec(getRemainSeconds(now, nextUpdateAt));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [nextUpdateAt]);

  const timerText = useMemo(() => formatRemainText(remainSec), [remainSec]);

  return (
    <View style={[styles.row, { backgroundColor }]}>
        {/* Center: 타이틀(항상 화면 정중앙) */}
        <View pointerEvents="none" style={styles.centerAbs}>
        <Text style={styles.title} numberOfLines={1}>
            {title}
        </Text>
        </View>

        {/* Left: 타이머(옵션) */}
        {showTimer ? (
        <Pressable style={styles.timerPill} hitSlop={HIT_SLOP}>
            <Text style={styles.timerText}>{timerText}</Text>
        </Pressable>
        ) : (
        <View />
        )}
    </View>
    );
});

export default ExploreHeaderWithTimer;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: 52,
    justifyContent: 'center',
    position: 'relative', // centerAbs를 위해 필요
  },

  // 타이틀을 절대 위치로 중앙 고정 (좌/우 요소 길이 영향 X)
  centerAbs: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },

  timerPill: {
    alignSelf: 'flex-start', // 왼쪽에 붙게
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
  },

  timerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    textAlignVertical: 'center',
  },
});