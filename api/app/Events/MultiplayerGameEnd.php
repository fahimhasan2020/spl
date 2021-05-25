<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MultiplayerGameEnd implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $id;
    public $result;
    public $coins;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($id,$result,$coins)
    {
        $this->id = $id;
        $this->result = $result;
        $this->coins = $coins;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['game-over-multi'];
    }

    public function broadcastWith()
    {
        return ['id'=>$this->id,'result'=>$this->result,'coins'=>$this->coins];
    }

    public function broadcastAs()
    {
        return 'game-over-multi';
    }
}
