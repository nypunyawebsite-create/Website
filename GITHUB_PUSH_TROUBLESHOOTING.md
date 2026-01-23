# GitHub Push Troubleshooting - Permission Denied

## 🔴 Issue: Permission Denied

**Error:** `remote: Permission to nypunyawebsite-create/Website.git denied to akhil63422`

**Cause:** You're authenticated as `akhil63422` but trying to push to `nypunyawebsite-create/Website.git`

---

## ✅ Solutions

### Option 1: Use Personal Access Token (Recommended)

1. **Create Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Name: "Nypunya Website Push"
   - Select scopes: ✅ `repo` (full control)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Update Remote URL with Token:**
   ```bash
   git remote set-url origin https://YOUR_TOKEN@github.com/nypunyawebsite-create/Website.git
   ```

   Or use your GitHub username:
   ```bash
   git remote set-url origin https://nypunyawebsite-create:YOUR_TOKEN@github.com/nypunyawebsite-create/Website.git
   ```

3. **Push Again:**
   ```bash
   git push -u origin master
   ```

---

### Option 2: Switch GitHub Account

If you have access to the `nypunyawebsite-create` account:

1. **Log out of current GitHub account:**
   ```bash
   git config --global --unset credential.helper
   ```

2. **Clear cached credentials:**
   ```bash
   # macOS
   git credential-osxkeychain erase
   host=github.com
   protocol=https
   [Press Enter twice]
   ```

3. **Push and authenticate with correct account:**
   ```bash
   git push -u origin master
   # Enter credentials for nypunyawebsite-create account
   ```

---

### Option 3: Use SSH (If you have SSH key set up)

1. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:nypunyawebsite-create/Website.git
   ```

2. **Push:**
   ```bash
   git push -u origin master
   ```

---

### Option 4: Get Added as Collaborator

If you don't have access to `nypunyawebsite-create` account:

1. Ask the repository owner to add you as a collaborator:
   - Repository → Settings → Collaborators
   - Add your GitHub username: `akhil63422`
   - Give "Write" access

2. Then push:
   ```bash
   git push -u origin master
   ```

---

## 🚀 Quick Fix Commands

### If you have the token:
```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://YOUR_TOKEN@github.com/nypunyawebsite-create/Website.git
git push -u origin master
```

### If you want to use username + token:
```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://nypunyawebsite-create:YOUR_TOKEN@github.com/nypunyawebsite-create/Website.git
git push -u origin master
```

---

## 📝 Current Status

✅ **Completed:**
- Remote repository updated
- All files staged (83 files)
- Changes committed successfully
- Ready to push

❌ **Pending:**
- Authentication issue needs to be resolved
- Push failed due to permissions

---

## 🔐 Security Note

**Never commit tokens to git!** Use one of these methods:
- Use token in URL (one-time push)
- Use credential helper
- Use SSH keys
- Use GitHub CLI

---

**Next Step:** Choose one of the solutions above and push your code! 🚀
