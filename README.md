# Windows 環境
## WSL
PowerShell（管理者モード: ON） で

1. `wsl --install`
2. PC 再起動
3. Ubuntu「ウブントゥ」（自動で起動）でユーザ名とパスワードを設定
4. VS Code のターミナルで WSL を選択

---
### 管理者モードで実行する
`touch ~/.sudo_as_admin_successful`

### アップデート
`sudo apt update && sudo apt upgrade`

※ パスワードを要求されるので、Ubuntu の初回設定で設定したパスワードを入力する

---
## Volta
1. Windows 開発者モード => ON
2. `curl https://get.volta.sh | bash`
3. `export VOLTA_HOME="$HOME/.volta"`
4. `export PATH="$VOLTA_HOME/bin:$PATH"`
