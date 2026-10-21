# Emon FF Proxy — GitHub Pages

## প্রকাশ করার নিয়ম
1. ZIP ফাইলটি extract করুন।
2. GitHub-এ নতুন **public repository** তৈরি করুন, যেমন `emon-ff-proxy`।
3. এই ফোল্ডারের সব ফাইল repository-র root-এ upload করুন (`index.html` root-এ থাকবে)।
4. Repository → **Settings → Pages** খুলুন।
5. **Deploy from a branch** নির্বাচন করুন, branch `main`, folder `/ (root)` সেট করে Save করুন।
6. কয়েক মিনিট পর GitHub Pages URL খুলুন। HTTPS চালু থাকলে Chrome-এ **Add to Home screen / Install app** ব্যবহার করা যাবে।

## গুরুত্বপূর্ণ
- এই সাইটটি বর্তমানে payment link-এ নিয়ে যায়; পেমেন্ট সত্যি হয়েছে কি না যাচাই করে না।
- স্বয়ংক্রিয় পেমেন্ট যাচাই/অ্যাকাউন্ট আনলক করতে payment provider-এর verified callback/webhook এবং server-side backend লাগবে। GitHub Pages একা secret key বা secure payment verification রাখতে পারে না।
- Telegram-এর সদস্যদের জন্য পেমেন্ট-পরবর্তী প্রবেশ নিয়ন্ত্রণ করতে private channel এবং admin approval/invite-link workflow ব্যবহার করুন।
- APK ফাইল এখনো অন্তর্ভুক্ত নয়। নিজের/অনুমোদিত Android app তৈরি ও নিরাপত্তা পরীক্ষা করার পর APK release দিন; পরে download button-এ release URL যুক্ত করুন।
- এই প্যাকেজ কোনো কার্যকর proxy server বা Free Fire configuration সরবরাহ করে না; এটি website/PWA frontend।
