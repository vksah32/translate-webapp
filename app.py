from flask import Flask, render_template, request
from flask import jsonify
import tensorflow as tf
import sys
sys.path.insert(0, './../translate_mini')

import translate_mini as tm

app = Flask(__name__,static_url_path="/static")

#############
# Routing
#
@app.route('/message', methods=['POST'])
def reply():
    print("aah")
    return jsonify( { 'text': tm.get_translation(request.form['msg'] ) } )
    # return jsonify( { 'text': "lalal" } )

@app.route("/")
def index():
    return render_template("index2.html")
#############

'''
Init seq2seq model

    1. Call main from execute.py
    2. Create decode_line function that takes message as input
'''
#_________________________________________________________________
import sys
import os.path


# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), os.path.pardir)))
# import tensorflow as tf
# import execute

# sess = tf.Session()
# sess, model, enc_vocab, rev_dec_vocab = execute.init_session(sess, conf='seq2seq_serve.ini')
#_________________________________________________________________

# start app
if (__name__ == "__main__"):
    app.run(port = 5000)
