




def formData(request):
    dataDict={}
    RosterId=[]
    RosterName=[]
    if request.method == 'POST': # two request types--> request.post and request.body
        username=request.POST['username']
        username=username.split('@')[0].lower() # first value after split string has only name
        if 'token' in request.POST:
            token=request.POST['token']
        if 'password' in request.POST:
            password=request.POST['password'] # AKS WHETHER IT IS A DICTIONARY?
        connection = pymysql.connect(host='10.104.200.45',port=3306,user='remoteuser',password='password',db='rosternewtest')
        cursor=connection.cursor()