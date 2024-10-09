/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';
import { FILLBOM_COLOR } from '@/constants/color';

const TEXT_STYLES = StyleSheet.create({
  // Title Styles
  TITLE_XL_BOLD: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 36,
    color: FILLBOM_COLOR.GRAY[900],
  },
  TITLE_XL_SEMI_BOLD: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 26,
    fontWeight: '600',
    lineHeight: 36, // SemiBold
    color: FILLBOM_COLOR.GRAY[900],
  },
  TITLE_XL_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 26,
    fontWeight: 'normal',
    lineHeight: 36,
    color: FILLBOM_COLOR.GRAY[900],
  },

  // SubTitle Styles
  SUBTITLE_LARGE_BOLD: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    color: FILLBOM_COLOR.GRAY[900],
  },
  SUBTITLE_LARGE_SEMI_BOLD: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28, // SemiBold
    color: FILLBOM_COLOR.GRAY[900],
  },
  SUBTITLE_LARGE_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 20,
    fontWeight: 'normal',
    lineHeight: 28,
    color: FILLBOM_COLOR.GRAY[900],
  },

  // Body Styles
  BODY_MEDIUM_BOLD: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    color: FILLBOM_COLOR.GRAY[900],
  },
  BODY_MEDIUM_SEMI_BOLD: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22, // SemiBold
    color: FILLBOM_COLOR.GRAY[900],
  },
  BODY_MEDIUM_MEDIUM: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22, // Medium
    color: FILLBOM_COLOR.GRAY[900],
  },
  BODY_MEDIUM_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 22,
    color: FILLBOM_COLOR.GRAY[900],
  },

  // SubText Styles
  SUBTEXT_SMALL_BOLD: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 20,
    color: FILLBOM_COLOR.GRAY[900],
  },
  SUBTEXT_SMALL_SEMI_BOLD: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20, // SemiBold
    color: FILLBOM_COLOR.GRAY[900],
  },
  SUBTEXT_SMALL_MEDIUM: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20, // Medium
    color: FILLBOM_COLOR.GRAY[900],
  },
  SUBTEXT_SMALL_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
    color: FILLBOM_COLOR.GRAY[900],
  },

  // Sentence Styles
  SENTENCE_SMALL_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 21, // 150% of 14
    color: FILLBOM_COLOR.GRAY[900],
  },

  // Caption Styles
  CAPTION_X_SMALL_BOLD: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 18,
    color: FILLBOM_COLOR.GRAY[900],
  },
  CAPTION_X_SMALL_SEMI_BOLD: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18, // SemiBold
    color: FILLBOM_COLOR.GRAY[900],
  },
  CAPTION_X_SMALL_MEDIUM: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18, // Medium
    color: FILLBOM_COLOR.GRAY[900],
  },
  CAPTION_X_SMALL_REGULAR: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: 18,
    color: FILLBOM_COLOR.GRAY[900],
  },
});

export default TEXT_STYLES;
