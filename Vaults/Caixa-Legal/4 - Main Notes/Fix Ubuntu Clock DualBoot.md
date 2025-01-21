11-05-2024 17:11

Tags: [[Linux]]

# Fix Ubuntu Clock DualBoot

Notei que o relógio no windows ficava dessincronizando, então achei esse comando:

```bash
sudo timedatectl set-local-rtc 1 --adjust-system-clock
```

Ele resolve esse problema

# References

https://youtu.be/VaIgbTOvAd0?t=870