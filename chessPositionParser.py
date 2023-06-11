def parse_fen(string):
    uc = {
    'Wc': '\u2587',  # ▇
    'Bc': '\uff3f',  # ＿
    'K': '\u265A',
    'Q': '\u265b',  # ♛
    'R': '\u265c',  # ♜
    'B': '\u265d',  # ♝
    'N': '\u265e',  # ♞
    'P': '\u265f',  # ♟
    'k': '\u2654',  # ♔
    'q': '\u2655',  # ♕
    'r': '\u2656',  # ♖
    'b': '\u2657',  # ♗
    'n': '\u2658',  # ♘
    'p': '\u2659'  # ♙
}
    a=string.split('/')
    te=a[-1].split(' ')[0]
    x=a[-1].split(' ')[1]
    a[-1]=te
    colorseq=1 
    res=[]
    if x == 'w':
        a=a[::-1]
    else:
        a=a
    for i in range(7, -1, -1):
        if x== 'w':
           val =a[i]
        else:
            val =a[i][::-1]
        color=uc['Wc'] if colorseq == 1 else uc['Bc']
        for j in val:
            if j.isdigit():
                for i in range(0,int(j)):
                    res.append(color)
                    color=uc['Bc'] if color== uc['Wc'] else uc['Wc']
            else:
                res.append(uc[j])
                color=uc['Bc'] if color== uc['Wc'] else uc['Wc']

        colorseq= 1 if colorseq == 0 else 0
        res.append('\n')
    return ''.join(res)
print(parse_fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"))