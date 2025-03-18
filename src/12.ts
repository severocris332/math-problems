
import numpy as np

def get_random_ts_code():
    """Returns a random time series with 100 data points"""
    # Generate a random walk
    ts = np.random.randn(100)
    for i in range(99):
        ts[i+1] = ts[i] + np.random.normal(scale=0.1)
    return ts