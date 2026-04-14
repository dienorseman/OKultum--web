
async function sha1(password: string) {
    try {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-1', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
        return hashHex;
    } catch (error) {
        throw error;
    }
}

export async function checkPwnedPassword(password: string) {
    try {

        const fullHash = await sha1(password);
        const prefix = fullHash.slice(0, 5);
        const suffix = fullHash.slice(5);


        const url = `https://api.pwnedpasswords.com/range/${prefix}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const textResponse = await response.text();

        const lines = textResponse.split('\n');

        for (const line of lines) {
            if (!line.trim()) continue;
            const [foundSuffix, count] = line.split(':');
            if (foundSuffix === suffix) {
                const countNum = parseInt(count, 10);
                return countNum;
            }
        }

        return 0;

    } catch (error) {
        console.error('[Pwned] Crit error:', error);
        throw error;
    }
}