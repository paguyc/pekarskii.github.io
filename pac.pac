Updated PAC Configuration

function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "claude.ai") ||
        dnsDomainIs(host, "rutracker.org") ||
        dnsDomainIs(host, "chatgpt.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        dnsDomainIs(host, "ggpht.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "linkedin.com") ||
        dnsDomainIs(host, "flibusta.is")) {
        return "PROXY 83.142.209.57:63822";
    }
    return "DIRECT";
}
