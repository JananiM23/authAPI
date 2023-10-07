import jwt from "jsonwebtoken";

const access_token = 'c1e9a6e622095b6a4009bfb6b7daa818faa7e8df';
const refresh_token = 'c1e9a6e622095b6a4009bfb6b7daa818faa7e8df';

export default class generateToken {
    accessToken = async (data: any) => {
        try {
            let header = data;
            let accessToken = jwt.sign(header, access_token, { expiresIn : '10m' });
            return accessToken;
        } catch (error) {
            return error;
        }
    }

    refreshToken = async (data: any) => {
        try {
            let header = data;
            let refreshToken = jwt.sign(header, refresh_token, { expiresIn: '4d' });
        } catch (error) {
            return error;
        }
    }
}
