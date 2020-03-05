# fibonacci sequence


def fibonacci(n):
    if n == 1 or n == 2:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)


if __name__ == "__main__":
    for i in range(1, 200):
        if fibonacci(i) <= 200:
            print(fibonacci(i), end="\t")
        else:
            exit()