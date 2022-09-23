import {Stargazer} from '../models/Stargazer';
import Config from 'react-native-config';

export const fetchStargazers = async (
  owner: string,
  repository: string,
  page: number,
  perPage: number,
): Promise<Stargazer[]> => {
  try {
    const url: string = `${Config.GITHUB_ENDPOINT}repos/${owner}/${repository}/stargazers?per_page=${perPage}&page=${page}`;
    const response: Response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${Config.GITHUB_TOKEN}`,
      },
    });

    if (response.status === 200) {
      const datas = await response.json();
      const stargazers: Stargazer[] = datas.map((row: any) => {
        return {
          username: row.login,
          avatar: row.avatar_url,
        };
      });
      return stargazers;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};
