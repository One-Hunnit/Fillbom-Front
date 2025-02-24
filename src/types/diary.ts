export interface IDiaryContent {
  type: 'qna' | 'free';
  title: string;
  content: string;
}

export interface IDiary {
  diaryId: number;
  userId: number;
  contents: IDiaryContent[];
  weather: string;
  emotion: string;
  photos: string[];
  createdAt: string;
}
