export async function fetchAvatarSVG(seed, style) {
  const url = `https://api.dicebear.com/9.x/${encodeURIComponent(style)}/svg?seed=${encodeURIComponent(seed)}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch avatar: ${res.status}`);
  }

  return await res.text();
}

