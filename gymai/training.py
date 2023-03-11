import tensorflow as tf
import numpy as np


class RecencyWeightingLayer(tf.keras.layers.Layer):
    def __init__(self, decay_rate, **kwargs):
        super(RecencyWeightingLayer, self).__init__(**kwargs)
        self.decay_rate = decay_rate

    def call(self, inputs):
        # Get the number of items in the input sequence
        num_items = tf.shape(inputs)[1]

        # Calculate and apply the recency weights
        weights = tf.math.pow(self.decay_rate, tf.math.divide(tf.range(num_items), 2))
        weighted_inputs = inputs * weights

        return weighted_inputs

    def get_config(self):
        # Get the layer configuration
        config = super(RecencyWeightingLayer, self).get_config()

        # Add the decay rate hyperparameter to the configuration
        config.update({"decay_rate": self.decay_rate})
        return config


def create_model():
    input_shape = (None,)
    input_layer = tf.keras.layers.Input(shape=input_shape, name="user_performance")

    # input weighing
    recency_layer = RecencyWeightingLayer(decay_rate=0.7)(input_layer)
