let
  pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz") {};
in pkgs.mkShell {
  name = "astro-bun-dev-shell";

  buildInputs = [
    pkgs.bun
    pkgs.git
  ];

  shellHook = ''
    echo "Welcome to your Bun + Astro dev shell!"
    bun --version || echo "Bun is not available"
  '';
}
