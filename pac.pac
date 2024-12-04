function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "claude.ai") ||
		dnsDomainIs(host, "rutracker.org") ||
        dnsDomainIs(host, "chatgpt.com")) {
        return "PROXY 83.142.209.57:63822";
    }
    return "DIRECT";
}
