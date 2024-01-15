import xlwt

print('a')
for x in range(5):
    for y in range(5):
        if (y, x) not in [(1, 2), (2, 1), (2, 2), (2, 3), (3, 2)]:
            print('*   ', end='')
        else:
            print('    ', end='')
    print('\n')


print('b')
for x in range(4):
    print('  ' * (4-x), end='')
    for y in range(8):
        if x == 0 or x == 3 or y == 0 or y == 7:
            print('* ', end='')
        else:
            print('  ', end='')
    print()

print('c')
data = [
    {'id': 1, 'name': 'Jono'},
    {'id': 2, 'name': 'Adi'},
    {'id': 3, 'name': 'Budi'},
    {'id': 2, 'name': 'Paijo'},
    {'id': 3, 'name': 'Michael'},
    {'id': 3, 'name': 'Lukas'},
]
print('ID', ' '*(20-2), 'NAME')
for d in data:
    print(d['id'], ' ' * (20 - len(str(d['id']))), d['name'])
temp = {}
for d in data:
    if d['id'] not in temp:
        temp[d['id']] = d['name']
    else:
        temp[d['id']] += ', ' + d['name']
print()
        
print('ID', ' '*(20-2), 'NAME')
for i in temp:
    print(i, ' ' * (20 - len(str(i))), temp[i])
print(temp)

