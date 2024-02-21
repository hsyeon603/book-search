export function refineAuthor(string) {
  if (string.includes('지은이: ')) string = string.replace('지은이: ', '');
  if (string.includes('지음 ;')) string = string.split('지음 ;')[0];
  if (string.includes(' 지음')) string = string.replace(' 지음', '');
  if (string.includes(' ;')) string = string.split(' ;')[0];
  if (string.includes('글: ')) string = string.split('글: ')[0];
  if (string.includes('글쓴이: ')) string = string.replace('글쓴이: ', '');

  return string;
}
